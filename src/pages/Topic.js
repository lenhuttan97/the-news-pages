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

export const ckeckTopic = (params)=>{
  const arrTopic = ["business", "entertainment", "general", "health", "science", "sports", "technology"];
  if(!arrTopic.includes(params.params.topicId)){
      throw new Error("no topic Id")
  }
  return params.params.topicId;
} 

export default Topic;