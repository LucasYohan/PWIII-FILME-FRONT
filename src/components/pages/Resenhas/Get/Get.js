import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../../../axiosConfig';

function FazerResenha() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [review, setReview] = useState('');
  const [loading, setLoading] = useState(true);

  const userId = localStorage.getItem("id_user");

  useEffect(() => {
    async function fetchReview() {
      try {
        const res = await api.get(`/resenha/Get/${userId}/${id}`);
        if (res.data?.review) {
          setReview(res.data.review);
        }
      } catch (error) {
        console.log("Nenhuma resenha anterior encontrada.");
      } finally {
        setLoading(false);
      }
    }

    fetchReview();
  }, [id, userId]);

  const enviarResenha = async () => {
    try {
      await api.post("/resenha", {
        review,
        review_user: userId,
        review_movie: id,
      });

      alert("Resenha enviada com sucesso!");
      navigate("/listarFilmes");
    } catch (error) {
      console.error("Erro ao enviar resenha:", error);
      alert("Erro ao enviar resenha.");
    }
  };

  if (loading) return <p>Carregando...</p>;

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h2>Escreva sua resenha</h2>
      <textarea
        rows="10"
        style={{ width: "100%", padding: "10px", fontSize: "16px" }}
        value={review}
        onChange={(e) => setReview(e.target.value)}
        placeholder="Digite sua resenha aqui..."
      />
      <br />
      <button
        onClick={enviarResenha}
        style={{
          marginTop: "10px",
          padding: "10px 20px",
          backgroundColor: "#28a745",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Concluir
      </button>
    </div>
  );
}

export default FazerResenha;
