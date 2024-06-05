import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { updateUser } from '../store/user';

const useFavoriteMusic = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();

  const addFavorite = async (email: string, userId: string, musicId: string) => {
    setLoading(true);
    setError(null);

    try {
      // Gọi API thêm bài hát vào danh sách yêu thích
      await axios.post('http://localhost:5005/api/favorite', { email, musicId });

      // Lấy thông tin người dùng mới sau khi cập nhật
      const response = await axios.get(`http://localhost:5005/api/users/${userId}`);

      console.log(response.data);
      // Cập nhật thông tin người dùng trong store
      dispatch(updateUser(response.data));
      localStorage.setItem("user", JSON.stringify(response.data));
      setLoading(false);
    } catch (err) {
      setError('An error occurred while adding favorite music.');
      setLoading(false);
    }
  };

  return { addFavorite, loading, error };
};

export default useFavoriteMusic;
