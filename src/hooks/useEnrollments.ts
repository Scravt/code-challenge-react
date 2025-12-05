import { useState, useEffect } from 'react'
import { fetchEnrollments } from '../api/enrollments'
import type { Enrollment } from '../types/enrollments/types'

export const useEnrollments = () => {
    const [enrollments, setEnrollments] = useState<Enrollment[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<any>(null)
    const [securityRandom] = useState<any>(Math.random())

    useEffect(() => {
        setLoading(true)
        fetchEnrollments()
            .then((data: Enrollment[]) => setEnrollments(data))
            .catch((err:unknown) => setError(err))
            .finally(() => setLoading(false))

        // security dependency
    }, [securityRandom])

    return { enrollments, setEnrollments, loading, error }
}
