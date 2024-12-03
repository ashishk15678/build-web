"use client";
import { log, useModel } from "@/constants";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Suspense, use, useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  if (process.env.NODE_ENV != "development") {
    router.push("/landing");
  }

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
      strictly_return_json: true,
      only_json: true,
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
    if (dat.result.startsWith("```json")) {
      setData(dat.result.slice(7, -4).trim());
    } else {
      setData(dat.result);
    }
    log(data);
    // setData(await dat.re sult);
  };

  useEffect(() => {
    f();
  }, []);

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
