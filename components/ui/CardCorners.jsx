function CardCorners() {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 font-thin text-2xl pointer-events-none z-10 opacity-80">
      <span className="absolute top-0 left-0 translate-x-[-50%] translate-y-[-50%]">
        +
      </span>
      <span className="absolute top-0 right-0 translate-x-[50%] translate-y-[-50%]">
        +
      </span>
      <span className="absolute left-0 bottom-0 translate-x-[-50%] translate-y-[50%]">
        +
      </span>
      <span className="absolute bottom-0 right-0 translate-x-[50%] translate-y-[50%]">
        +
      </span>
    </div>
  );
}

export default CardCorners;
