import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector} from 'react-redux';
import style from "./home.module.scss";
import { detailArticules } from "../redux/actions";

function Detail(props) {
  const dispatch = useDispatch();
  const detail = useSelector(state => state.detail);
 let {id} =  useParams()

 useEffect(() => {
  dispatch(detailArticules(id))
  // eslint-disable-next-line
 },[])

  return (
    <div>
      <div className={style.detail_container}>
          <img src={detail.url2} alt="img" />
          <h1>{detail.name}</h1>
          <p>{detail.description}</p>
      </div>
    </div>
  );
}

export default Detail;
