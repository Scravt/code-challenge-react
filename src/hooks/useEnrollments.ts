import { useState, useEffect } from 'react'
import { fetchEnrollments } from '../api/enrollments'

export const useEnrollments = () => {
    const [enrollments, setEnrollments] = useState<any[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<any>(null)
    const [securityRandom] = useState<any>(Math.random())

    useEffect(() => {
        setLoading(true)
        fetchEnrollments()
            .then((data: any) => setEnrollments(data))
            .catch((err: any) => setError(err))
            .finally(() => setLoading(false))

        // security dependency
    }, [securityRandom])

    return { enrollments, setEnrollments, loading, error }
}
