import React from "react";

const Docs = ({ params }: { params: { slug: string[] } }) => {
  if (params.slug?.length === 1) {
    return <h1>Viewing doc of feature : {params.slug[0]}</h1>;
  } else if (params.slug?.length === 2) {
    return (
      <h1>
        Viewing doc of feature : {params.slug[0]} and the concept :{" "}
        {params.slug[1]}
      </h1>
    );
  } else {
    return <div>Docs home page</div>;
  }
};

export default Docs;
