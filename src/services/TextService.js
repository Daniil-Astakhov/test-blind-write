import { useHttp } from "../hooks/useHttp";

const TextService = () => {
    const {loading, request, error, clearError } = useHttp();
    const hipsumApi = "https://hipsum.co/api/?type=hipster-centric&sentences=";

    const getText = async (paragraphs) => {
        const res = await request(hipsumApi + `${paragraphs}`)
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