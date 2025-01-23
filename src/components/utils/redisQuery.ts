import React, { useState} from "react";
import { ApiDataModel } from "../../models/apiDataModel";
import axios from "axios";
import URLS from './ulrs.ts'

export function useRedisQuery() {
const apiUrl:string = URLS.API_URL
const [link, setLink] = useState("");
  const [state, setState] = useState<"initial" | "submitting" | "success">(
    "initial"
  );
  const [error, setError] = useState(false);
  const [data, setData] = useState<ApiDataModel>({ short_url: null, original_url: null});

  const sendData = (e: React.FormEvent | undefined) => {
    if (e === undefined) {
      setState("initial");
      setLink("");
      setData({
          original_url: null,
          short_url: null,
      });
      return;
    }

    e.preventDefault();

    setError(false);
    setState("submitting");

    axios
      .post<ApiDataModel>(
        apiUrl,
        {
          original_url: link,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        setData(response.data);
        
        setState("success");
      })
      .catch(() => {
        setError(true);
        setState("initial");
      });
  };

  return {state, error, data, sendData, link, setLink}
}