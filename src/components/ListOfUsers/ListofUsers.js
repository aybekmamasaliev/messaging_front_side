import React, { useEffect, useState } from "react";

const ListofUsers = () => {
  const [isPostLoading, setIsPostLoading] = useState(true);
  const [good, setGood] = useState([]);
  useEffect(() => {
    fetch("https://sms-h9zb.onrender.com/user")
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          alert("no");
        }
      })
      .then((data) => {
        console.log(data);
        return setGood(data);
      })
      .finally(() => setIsPostLoading(false));
  }, []);

  return (
    <>
      <div>
        {isPostLoading === true ? (
          <div className="container loading_div mt-5">
            <p style={{margin:"0 auto"}}>Loading...</p>
          </div>
        ) : (
          <div className="row m-0 container mt-3">
            {good.map((item) => (
              <div
                className="m-0 row mt-4 col-sm-4 bg-primary text-white border "
                key={item._id}
              >
                <img src={item.img} alt="" className="width_img m-0" />
                <p className="mt-4">{item.name}</p>
                <p>{item.price}</p>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ListofUsers;
