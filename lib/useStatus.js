import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json())

const useStatus = () => {
    const swrData = useSWR(`https://issue-card.vercel.app/api/status/ehne`, fetcher)
    return swrData
}

export default useStatus