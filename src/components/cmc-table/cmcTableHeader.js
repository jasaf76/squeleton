import ChevronDown from "../assets/svg/chevronDown"
import Info from "../assets/svg/info"

const styles = {
    textIcon: `flex items-center`
}

const CMCtableHeader = () => {
  return (
    <div>
      <p className="text-[#a3e635] text-center text-bold  text-[1.93rem] flex   align-super ml-[700px] -mt-7 my-8">
        Die Top 10 Kryptowährungen
      </p>
      <tbody className="text-white  text-center border-b border-gray-800 text-[0.93rem] flex   align-super ml-[200px] ">
        <tr className="text-white ">
          <th className="max-w-full">
            <td className="cursor-pointer"></td>

            <b className="mr-[90px]">
              # &nbsp;
              <ChevronDown />
            </b>
          </th>
          <th>
            <p className="ml-[90px]">Name</p>
          </th>
          <th>
            <p className="ml-[120px]">Preís</p>{" "}
          </th>
          <th>
            <p className="ml-[80px]">24h %</p>
          </th>
          <th>
            {" "}
            <p className="ml-[80px]">7d %</p>
          </th>
          <th>
            <div className={styles.textIcon}>
              <p className="ml-[60px]">Marktkapitalisierung</p> <Info />
            </div>
          </th>
          <th>
            <div className={styles.textIcon}>
              <p className="ml-[94px]">Volumen(24h)</p> <Info />
            </div>
          </th>
          <th>
            <div className={styles.textIcon}>
              <p className="ml-[120px]">Unlaufendes Angebot</p> <Info />
            </div>
          </th>
          <th>
            <p className="ml-[50px]">Letzten 7 Tagen</p>
          </th>
        </tr>
      </tbody>
    </div>
  );
}

export default CMCtableHeader