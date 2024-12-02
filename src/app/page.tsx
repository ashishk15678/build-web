"use client";
import { useModel } from "@/constants";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Suspense, use, useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [data, setData] = useState<string>("");

  interface IContext {
    type: string;
    context: string;
  }

  const getContext = ({
    designContext,
    technicalContext,
    query,
    prev,
  }: {
    designContext: IContext | undefined;
    technicalContext: IContext | undefined;
    query: string;
    prev: string[] | undefined;
  }) => {
    return JSON.stringify({
      type: "query",
      response_type: "json",
      write_json: false,
      use_backticks: false,
      contexts: [designContext, technicalContext],
      query: query,
      backticks: false,
      define_return_type: false,
      defing_lang: false,
      define_data_type: false,
      previous_reference: prev,
    });
  };

  const f = async (text?: string) => {
    if (!text) return;
    var dat = await useModel(
      getContext({
        query: text,
        designContext: undefined,
        technicalContext: undefined,
        prev: undefined,
      })
    );
    console.log({ dat });
    setData(await dat.result);
  };

  useEffect(() => {
    f();
  }, []);

  if (process.env.NODE_ENV != "development") {
    router.push("/landing");
  }

  return (
    <div className="">
      <input
        maxLength={500}
        type="text"
        className="w-full"
        onKeyDown={async (e) => {
          if (e.key == "Enter") {
            setData("");
            await f((e.target as HTMLInputElement).value);
          }
        }}
      />
      <br />
      <hr /> <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      {data ? (
        <div className="max-w-screen container max-w-[100%] overflow-auto">
          {" "}
          {/* <pre> {JSON.stringify(JSON.parse(data), null, 2)}</pre> */}
          <pre>{data}</pre>
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  );
}
