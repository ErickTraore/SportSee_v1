function Boutonhorizontale(props) {
    return (
      <div className="boutonhorizontale">
        <div className="boutonhorizontale__container">
            <div className="boutonhorizontale__container__content">
                <button className="boutonhorizontale__container__content__button">
                  {props.content}
                </button>
            </div>
           
        
        </div>
    </div>
    );
  }
  
  export default Boutonhorizontale;