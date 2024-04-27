function Article({ title, date, preview }) {
    const formatDate = () => {
      return date ? date : "January 1, 1970";
    };
  
    return (
      <article>
        <h3>{title}</h3>
        <small>{formatDate()}</small>
        <p>{preview}</p>
      </article>
    );
  }
  
  export default Article;
  

