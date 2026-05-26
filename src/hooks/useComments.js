import { useEffect } from 'react';
import useCommentStore from '../store/useCommentStore.js';

export default function useComments(limit = 8) {
    const { comments, loading, fetchComments } = useCommentStore();

    useEffect(() => {
        fetchComments(limit);
    }, [fetchComments, limit]);

    return { comments: comments.slice(0, limit), loading };
}
