import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import s from "./ClientOrder.module.css";
import { useParams } from "react-router-dom";

const ClientOrder = () => {
  let curretnid = useParams()._id ;

  let asd;

  const [good, setGood] = useState({});

  useEffect(() => {
    fetch("https://sms-h9zb.onrender.com/orders")
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          alert("something is wrong");
        }
      })
      .then((data) => setGood(data.find(item=>item._id === curretnid)));
  }, []);


  const getTotalSum = () => {
    return good.orders?.reduce((sum, item) => {
      if (item.currency === "$") {
        return sum + item.count2 * item.price * 85;
      }
      return sum + item.count2 * item.price;
    }, 0);
  };





 

  return (
    // <div className={s.container}>
    //   {good.orders?.map((item) => (
    //     <table>
    //       <tbody>
    //         <tr>
    //           {/* <th><p className={s.size20}>Product</p></th>
    //         <th><p className={s.size20}>Name</p></th>
    //         <th><p className={s.size20}>Price</p></th>
    //         <th><p className={s.size20}>Amount</p></th>
    //         <th><p className={s.size20}>Pay</p></th> */}
    //         </tr>
    //         <tr key={item.id}>
    //           <td>
    //             <img src={item.img} className={s.img} alt="" />
    //           </td>
    //           <td>
    //             <p className={s.size20}>{item.name}</p>
    //           </td>
    //           <td>
    //             <p className={s.size20}>{item.price}</p>
    //           </td>

    //           <td>
    //             <input
    //               className={s.input}
    //               // onChange={(e) => changeCount(e, item)}
    //               type="number"
    //               defaultValue={item.count}
    //             />
    //           </td>
    //           <td style={{ width: "200px", textAlign: "center" }}>
    //             <p className={s.size20}>
    //               {item.count * item.price} {item.currency}
    //             </p>
    //           </td>
    //         </tr>
    //       </tbody>
    //     </table>

    // ))}
    // </div>
    <>
      <div className={s.container}>
        <h1>Корзина</h1>
        <table className={s.table}>
          <tbody>
            <tr>
              <th>
                <p className={s.size20}>Товар</p>
              </th>
              <th>
                <p className={s.size20}>Название</p>
              </th>
              <th>
                <p className={s.size20}>Цена</p>
              </th>
              <th>
                <p className={s.size20}>Количество</p>
              </th>
              <th>
                <p className={s.size20}>Оплата</p>
              </th>
            </tr>
            {good.orders?.map((item) => {
              return (
                <>
                  <tr key={item._id}>
                    <td>
                      <img src={item.img} className={s.img} alt="" />
                    </td>
                    <td>
                      <p className={s.size20}>{item.name}</p>
                    </td>
                    <td>
                      <p className={s.size20}>{item.price}</p>
                    </td>
                    <td>
                      <input
                        className={s.input}
                        // onChange={(e) => changeCount(e, item)}
                        type="number"
                        defaultValue={item.count2}
                      />
                    </td>
                    <td style={{ width: "200px", textAlign: "center" }}>
                      <p className={s.size20}>
                        {item.count2 * item.price} {item.currency}
                      </p>
                    </td>
                    <td>
                      {/* <button
                        className={s.forDelete}
                        onClick={() => deleteItem(item.id)}
                      >
                        Delete
                      </button> */}
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
        <div className={s.container2}>
          <h2 style={{ padding: "10px", fontSize: "30px" }}>
          Итоговая сумма : <span>{getTotalSum()} </span>
            <span> сом</span>
          </h2>
        </div>
      </div>
    </>
  );

};

export default ClientOrder;
