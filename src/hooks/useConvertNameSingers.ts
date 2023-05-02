import { useEffect, useState } from "react";


export default function usePlayMusic({ singers }: { singers: Array<{id: string, name: string}>  }) {
  const [name, setName] = useState('');

  useEffect(() => {
    const name =  String(singers.map((item) => item.name))
    setName(name);
  }, [singers]);

  return { name };
}
