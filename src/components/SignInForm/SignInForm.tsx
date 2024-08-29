import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { logout } from '../../features/user/userSlice';
import { fetchUserByUsername } from '../../features/user/userAction';

export const SignInForm: React.FC = () => {
    const [username, setUsername] = useState('');
    const dispatch = useAppDispatch();
    const user = useAppSelector(state => state.user.user);
    const status = useAppSelector(state => state.user.status);
    const error = useAppSelector(state => state.user.error);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (username.trim()) {
            dispatch(fetchUserByUsername(username));
        }
    };

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <div>
            {user ? (
                <div>
                    <p>Welcome, {user.name}!</p>
                    <button onClick={handleLogout}>Log Out</button>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                    />
                    <button type="submit" disabled={status === 'loading'}>
                        {status === 'loading' ? 'Signing In...' : 'Sign In'}
                    </button>
                    {status === 'failed' && <p>{error}</p>}
                </form>
            )}
        </div>
    );
};