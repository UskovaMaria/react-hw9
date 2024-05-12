import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../store/productSlice";

export const AddProductForm = ({ onClose }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    title: "",
    price: "",
    descr: "",
    img: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Валідація
    if (!formData.title || !formData.price || isNaN(formData.price)) {
      alert("Будь ласка, заповніть всі поля правильно.");
      return;
    }
    // Відправлення дії для додавання продукту
    dispatch(
      addProduct({
        product: {
          id: Math.random(), // Генеруємо унікальний ідентифікатор
          title: formData.title,
          price: Number(formData.price),
          descr: formData.descr,
          img: formData.img,
          publish: true, // Припускаємо, що він завжди опублікований
        },
      })
    );
    // Очищення полів форми
    setFormData({
      title: "",
      price: "",
      descr: "",
      img: "",
    });
    // Закриття попапу
    onClose();
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label>
          Назва продукту:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </label>
        <label>
          Ціна:
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </label>
        <label>
          Опис:
          <textarea
            name="descr"
            value={formData.descr}
            onChange={handleChange}
          ></textarea>
        </label>
        <label>
          URL зображення:
          <input
            type="text"
            name="img"
            value={formData.img}
            onChange={handleChange}
          />
        </label>
        <div className="form__buttons">
          <button className="btn btn__add" type="submit">Додати</button>
          <button className="btn btn__close" type="button" onClick={onClose}>Закрити</button>
        </div>
      </form>
    </div>
  );
};