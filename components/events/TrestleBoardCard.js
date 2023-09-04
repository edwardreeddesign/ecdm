const TrestleBoardCard = ({ trestle }) => {
  return (
    <div className="flex flex-col justify-center text-left  py-2 px-4 border-b-2 border-main1 ">
      <h2 className="text-2xl font-light">{trestle.lodge}</h2>
      <h3>
        Installation:{' '}
        <span className="font-bold text-xl">{trestle.installation}</span>
      </h3>
      <h3>
        Official Visit:{' '}
        <span className="font-bold text-xl">{trestle.officialVisit}</span>
      </h3>
    </div>
  );
};
export default TrestleBoardCard;
