import React from "react";
import data from "../../data/demo.json";

function AlbumList() {
  const formatTheme = (jsonString: string) => {
    const regex = /\[(.*?)\]\((\/en)?(.*?)\)/;
    const match = jsonString.match(regex);

    if (match) {
      const title = match[1];
      const link = match[3];

      const formattedElement = (
        <li key={link}>
          <a href={`https://igx.biz${link}`}>{title}</a>
        </li>
      );

      return formattedElement;
    }
    return null;
  };
  
  return (
    <div className="text-white">
      xin chao
      <ul>
        {data.reports.map((item) => {
          return <li>
            <ul>
                {
                    item.lines.map((line) => {
                        return (
                            formatTheme(line)
                        )
                    })
                }
            </ul>
          </li>;
        })}
      </ul>
    </div>
  );
}

export default AlbumList;
