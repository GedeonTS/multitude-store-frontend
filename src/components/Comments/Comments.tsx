import "./Comments.scss";
import StarRating from "../FiveStars/StarRating";
import styled from "styled-components";
import profile from "../../assets/profileplaceholder.png";

const Stars = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50px;
  input[type="radio"] {
    display: none;
  }
  .star {
    cursor: pointer;
    transition: color 200ms;
  }
`;
const Comments = () => {
  const comments = [
    {
      id: 1,
      name: "John Doe",
      picture: profile,
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
    },
    {
      id: 2,
      name: "John Doe",
      picture: profile,
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
    },
    {
      id: 3,
      name: "John Doe",
      picture: profile,
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
    },
    {
      id: 4,
      name: "John Doe",
      picture: profile,
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
    },
    {
      id: 5,
      name: "John Doe",
      picture: profile,
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
    },
  ];
  return (
    <section className="comments-section">
      <div className="container">
        <h2 className="comments-title">What is everyone saying?</h2>
        <div className="comments-wrapper">
          {comments.map((comment) => (
            <div className="comment-item" key={comment.id}>
              <Stars className="stars">
                <StarRating />
              </Stars>

              <p className="comment">{comment.comment}</p>
              <div className="comment-author">
                <img src={comment.picture} alt={comment.name} />
                <h4 className="comment-author-name">{comment.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Comments;
