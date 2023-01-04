import "./trivial.scss";

const Trivial = () => {
  return (
    <div className="trivial">
      <div className="question">Which is the best school in Ghana</div>
      <div className="questions">
        <div className="question wrong">University of Ghana</div>
        <div className="question correct">University of Education</div>
        <div className="question">University of CApe Coast</div>
        <div className="question">
          Kwamw Nkrumah University of Science and Technology
        </div>
      </div>
    </div>
  );
};

export default Trivial;
