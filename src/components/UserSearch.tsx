import React, { useState, useEffect, useCallback } from 'react';
import { Search, Loader2 } from 'lucide-react';
import { debounce } from '../utils/debounce';
import { Trie } from '../utils/searchUtils';
import type { User } from '../types';

const UserSearch: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [trie, setTrie] = useState<Trie>(new Trie());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        setUsers(data);
        
        // Build Trie with user names
        const newTrie = new Trie();
        data.forEach((user: User) => newTrie.insert(user.name));
        setTrie(newTrie);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleSearch = useCallback(
    (term: string) => {
      if (!term.trim()) {
        setFilteredUsers(users);
        return;
      }

      const matchedNames = trie.search(term);
      const filtered = users.filter(user => 
        matchedNames.includes(user.name)
      );
      setFilteredUsers(filtered);
    },
    [users, trie]
  );

  const debouncedSearch = debounce(handleSearch, 300);

  useEffect(() => {
    debouncedSearch(searchTerm);
  }, [searchTerm, debouncedSearch]);

  if (error) {
    return (
      <div className="min-h-[400px] flex items-center justify-center text-red-600">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Our Users</h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Search and explore our growing community of users
        </p>
        
        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
          </div>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="min-h-[400px] flex flex-col items-center justify-center">
            <Loader2 className="w-12 h-12 text-blue-600 animate-spin mb-4" />
            <p className="text-gray-600">Loading users...</p>
          </div>
        ) : (
          <>
            {/* Results Count */}
            <p className="text-gray-600 mb-8 text-center">
              Showing {(searchTerm ? filteredUsers : users).length} users
            </p>

            {/* Users Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {(searchTerm ? filteredUsers : users).map((user) => (
                <div
                  key={user.id}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xl font-bold">
                      {user.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold line-clamp-1">{user.name}</h3>
                      <p className="text-gray-600 text-sm line-clamp-1">{user.email}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-gray-600 text-sm flex items-center gap-2">
                      <span className="font-medium">Phone:</span>
                      {user.phone}
                    </p>
                    <p className="text-gray-600 text-sm flex items-center gap-2">
                      <span className="font-medium">Website:</span>
                      <a 
                        href={`https://${user.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        {user.website}
                      </a>
                    </p>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t">
                    <p className="font-medium text-sm mb-1">{user.company.name}</p>
                    <p className="text-sm text-gray-500 line-clamp-2">{user.company.catchPhrase}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* No Results */}
            {searchTerm && filteredUsers.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600">No users found matching "{searchTerm}"</p>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default UserSearch;