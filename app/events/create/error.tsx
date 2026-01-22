'use client';
import React from 'react';

export default function EventCreateError({ error, reset }: { error: Error; reset: () => void }) {
    return (
        <div className="p-6 max-w-2xl mx-auto">
            <h2 className="text-xl font-semibold mb-2">Something went wrong</h2>
            <pre className="bg-gray-900 text-white p-4 rounded">{error?.message}</pre>
            <div className="mt-4">
                <button onClick={() => reset()} className="px-3 py-2 bg-blue-600 text-white rounded">
                    Try again
                </button>
            </div>
        </div>
    );
}