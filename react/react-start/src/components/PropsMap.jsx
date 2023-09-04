import FunctionProps from "./FunctionProps"

export default function PropsMap ({ arr }) {
    console.log(arr)
    // const dataArr = [
    //     { name: 'peach', krPrice: 10000, number: 5 },
    //     { name: 'strawberry', krPrice: 14000, number: 1 }, 
    //     { name: 'pear', krPrice: 5000, number: 6 },
    //     { name: 'apple', krPrice: 10000, number: 14 },
    //   ];
    // const numArr = [10, 20, 30, 40, 50];
    // const nweArr = numArr.map((data) => {
    //     return data * 2;
    // });
    // console.log(nweArr)
return(
    <>
    <h4>가격표</h4>
    {/* name, number, KrPrice*/}
    {/* <FunctionProps 
    name={arr[0].name} 
    krPrice={[0].krPrice} 
    number={[0].count}
    />
    <FunctionProps name={arr[1].name} krPrice={[1].krPrice} number={[1].count}/>
    <FunctionProps name={arr[2].name} krPrice={[2].krPrice} number={[2].count}/>
    <FunctionProps name={arr[3].name} krPrice={[3].krPrice} number={[3].count}/> */}
    {/* {arr.map((map) => {
    return(  
    <FunctionProps  
    name={data.name} 
    krPrice ={data.krPrice} 
    number={data.count} 
    key={index} 
    />
    )

    })} */}
    </>
)
}