import Card from "./Card";

const Section = (props) => {
  return (
    <div>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <Card
              incrementCount={props.incrementCount}
              addedToCart={props.addedToCart}
              data={props.data}
              decrementCount={props.decrementCount}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section;
