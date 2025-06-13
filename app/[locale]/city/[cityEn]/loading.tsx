import { DefaultLoading } from "@/shared/ui/DefaultLoading";


export default function Loading() {
  return (
    <main style={{
      width: "100%",
      height: "100%",
      position:"absolute",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <DefaultLoading info="Loading screen" w="50dvw" h="50dvw" bw="15px"/>
    </main>
  )
}
