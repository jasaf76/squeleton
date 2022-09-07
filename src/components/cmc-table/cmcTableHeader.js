import ChevronDown from "../assets/svg/chevronDown"
import Info from "../assets/svg/info"

const styles = {
    textIcon: `flex items-center`
}

const CMCtableHeader = () => {
    return (
      <tbody>
        <tr>
          <th></th>
          <th className=" ">
            <b># &nbsp;</b>
            <ChevronDown />
          </th>
          <th>
            <p className="ml-[70px]">Name</p>
          </th>
          <th>
            <p className="ml-[80px]">Price</p>{" "}
          </th>
          <th>
            <p className="ml-[10px]">24h %</p>
          </th>
          <th> <p className="ml-[30px]">7d %</p></th>
          <th>
            <div className={styles.textIcon}>
              <p className="ml-[60px]">Market Cap</p> <Info />
            </div>
          </th>
          <th>
            <div className={styles.textIcon}>
              <p className="ml-[60px]">Volume(24h)</p> <Info />
            </div>
          </th>
          <th>
            <div className={styles.textIcon}>
              <p className="">Circulating Supply</p> <Info />
            </div>
          </th>
          <th>Last 7 days</th>
        </tr>
      </tbody>
    );
}

export default CMCtableHeader