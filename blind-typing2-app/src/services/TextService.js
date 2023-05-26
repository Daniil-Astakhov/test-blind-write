import { useHttp } from "../hooks/useHttp";


const TextService = () => {
    const {loading, request, error, clearError } = useHttp();
    const hipsumApi = "http://hipsum.co/api/?type=hipster-centric&sentences=3";

    const getText = async (paragraphs) => {
        const res = await request(`https://hipsum.co/api/?type=hipster-centric&sentences=${paragraphs}`)
        return res
    }

	return {
		loading,
		error,
		clearError,
		getText
	};
}

export default TextService;