import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface CardSkeletonProps {
  cards: number;
}

function CardSkeleton({ cards }: CardSkeletonProps) {
  return (
    <>
      {Array(cards)
        .fill(0)
        .map((item) => (
          <article
            className="containerProductCard"
            style={{
              width: "250px",
            }}
          >
            <div className="containerInfo">
              <div className="contentImage">
                <Skeleton width={120} height={120} />
              </div>
              <div className="titleAndPrice">
                <h1 className="titleProduct">
                  <Skeleton width={95} height={19} />
                </h1>
                <div className="priceProduct">
                  <Skeleton width={100} height={20} baseColor="#373737" />
                </div>
              </div>
              <p className="descProduct">
                <Skeleton width={222} height={36} />
              </p>
            </div>

            <button className="buyButton" disabled>
              Comprar
            </button>
          </article>
        ))}
    </>
  );
}

export default CardSkeleton;
