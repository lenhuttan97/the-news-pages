import React, { useState , useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Topic(props) {
  const [article, setArticle] = useState(null)
  const { topicId } = useParams()

  const navigate = useNavigate()

  useEffect(() => {
    if (topicId !== 'article') {
      // throw Error(`throw an error!`);
    }

    setArticle(topicId)

  }, [topicId])

  return (
    <div>
      {article}
    </div>
  );
}

export const a = ()=>{
  throw new Error(`throw an error!`);
} 

export default Topic;