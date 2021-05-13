// import React from "react"

// const Menu2 = () => {
//   return (
//     <>
//       {" "}
//       <div
//         className="flex m-auto overflow-auto pt-24 pr-24 pb-12 pl-12"
//         style={{ backgroundColor: "rgb(242,242,242)" }}
//       >
//         <div className="flex flex-col ml-2 -mr-12" style={{ width: "80%" }}>
//           {data.map(aa => {
//             return (
//               <>
//                 {" "}
//                 <div>
//                   <div
//                     className="w-10/12 top-6 relative"
//                     style={{
//                       borderBottom: "1px solid rgb(210, 210, 210)",
//                       zIndex: -1,
//                       position: "relative",
//                     }}
//                   ></div>
//                   <div className="bg-white rounded-full py-3 px-6 inline-flex items-center py-4 px-8 mb-4 ml-6">
//                     <div className="w-full">{aa.name}</div>
//                   </div>
//                 </div>
//                 <div className="grid gap-3 grid-cols-1 lg:grid-cols-3 2xl:grid-cols-3l">
//                   {cardData.map(xx => {
//                     return (
//                       <div>
//                         <div
//                           className="relative mt-0 flex h-4/5 flex-wrap"
//                           style={{
//                             width: "1000px",
//                             position: "relative",
//                           }}
//                         >
//                           <div className="w-1/4 mr-12 mb-12">
//                             <div>
//                               <div
//                                 className="flex flex-row flex-wrap right-0 left-0 max-w-full rounded justify-center m-0"
//                                 style={{
//                                   boxShadow:
//                                     "(0 0 0 / 12%) 0px 2px 2px 0px,rgb(0 0 0 / 12%) 0px 2px 4px 0px;",
//                                   flexBasis: "auto",
//                                   backgroundColor: "white",
//                                 }}
//                               >
//                                 <div className="w-full">
//                                   <div className="min-w-0 relative overflow-hidden">
//                                     <div className="h-34 w-full">
//                                       <img
//                                         className="w-full h-full max-w-full"
//                                         style={{
//                                           borderRadius: "3px 3px 0px 0px;",
//                                         }}
//                                         src={xx.img}
//                                       />
//                                     </div>
//                                     <div
//                                       className="bg-no-repeat w-24 h-16 absolute bottom-0"
//                                       style={{
//                                         backgroundSize: "100% 100%",
//                                         minWidth: "0.3em",
//                                         minHeight: "0.3em",
//                                         backgroundImage: { Shadow },
//                                       }}
//                                     ></div>
//                                     <div className="text-lg font-semibold absolute top-14 left-2">
//                                       <span>₹ {xx.mrp}</span>
//                                     </div>
//                                     <div className="text-7xl absolute top-2 right-2.5">
//                                       <div
//                                         className="bg-no-repeat w-6 h-4 absolute right-0 top-0 opacity-20 rounded-2xl "
//                                         style={{
//                                           backgroundSize: "100% 100%",
//                                           minWidth: "0.3em",
//                                           minHeight: "0.3em",
//                                           transform: "rotate(180deg)",
//                                           backgroundImage: { Shadow },
//                                         }}
//                                       ></div>
//                                       <div
//                                         className="bg-no-repeat absolute right-0 "
//                                         style={{
//                                           backgroundSize: "100% 100%",
//                                           minWidth: "0.3em",
//                                           minHeight: "0.3em",
//                                           backgroundImage: { Fav },
//                                         }}
//                                       ></div>
//                                       <div className="text-4xl absolute top-2 left-2.5">
//                                         <div
//                                           className="bg-no-repeat w-4 h-4"
//                                           style={{
//                                             backgroundSize: "100% 100%",
//                                             minWidth: "0.3em",
//                                             minHeight: "0.3em",
//                                           }}
//                                         ></div>
//                                       </div>
//                                       <div className="self-center absolute right-2.5 bottom-4">
//                                         <button className="cursor-pointer">
//                                           <span>CUSTOMIZE</span>
//                                           <div
//                                             className="bg-no-repeat w-4 h-4 mt-1.5 ml-1 "
//                                             style={{
//                                               backgroundSize: "100% 100%",
//                                               minWidth: "0.3em",
//                                               minHeight: "0.3em",
//                                             }}
//                                           ></div>
//                                         </button>
//                                       </div>
//                                     </div>
//                                   </div>
//                                 </div>
//                                 <div
//                                   className="flex-wrap w-full m-3"
//                                   style={{ flexBasis: "auto" }}
//                                 >
//                                   <div className="border-b-2 border-fuchsia-600 h-20 mb-4 flex flex-col">
//                                     <span
//                                       className="justify-start text-sm font-semibold"
//                                       style={{ flexBasis: "auto" }}
//                                     >
//                                       {xx.name}
//                                     </span>
//                                     <span
//                                       style={{ flexBasis: "auto" }}
//                                       className="leading-4 text-xs mt-2 w-11/12 overflow-hidden"
//                                     >
//                                       {xx.detail}
//                                     </span>
//                                   </div>
//                                   <div
//                                     className="flex-nowrap flex-row flex mt-1.5 mb-4 w-full"
//                                     style={{ flexBasis: "auto" }}
//                                   >
//                                     <div className="flex-nowrap flex-col w-2/5">
//                                       <div className="w-5 h-3.5 text-xs mb-1">
//                                         Size
//                                       </div>
//                                       <div>
//                                         <div className="relative pb-0.5">
//                                           <div className="flex cursor-pointer justify-between">
//                                             <div
//                                               className="flex font-semibold"
//                                               style={{
//                                                 fontSize: "11px",
//                                                 color: "black",
//                                               }}
//                                             >
//                                               Medium
//                                             </div>
//                                             <div
//                                               className="bg-no-repeat w-4 mt-1.5 ml-2.5 font-semibold"
//                                               style={{
//                                                 backgroundSize: "100% 100%",
//                                                 minWidth: "0.3em",
//                                                 minHeight: "0.3em",
//                                               }}
//                                             ></div>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div
//                                         style={{
//                                           borderBottom:
//                                             "1px solid rgb(233,233,233)",
//                                         }}
//                                       ></div>
//                                     </div>
//                                     <div className="flex-nowrap flex-col ml-2 w-3/5">
//                                       <div className="w-5 h-3.5 text-xs mb-1">
//                                         Crust
//                                       </div>
//                                       <div>
//                                         <div className="relative pb-0.5">
//                                           <div className="flex cursor-pointer justify-between">
//                                             <div
//                                               className="flex font-semibold"
//                                               style={{
//                                                 fontSize: "11px",
//                                                 color: "black",
//                                               }}
//                                             >
//                                               New Hand Tossed
//                                             </div>
//                                             <div
//                                               className="bg-no-repeat w-4 mt-1.5 ml-2.5 font-semibold"
//                                               style={{
//                                                 backgroundSize: "100% 100%",
//                                                 minWidth: "0.3em",
//                                                 minHeight: "0.3em",
//                                               }}
//                                             ></div>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div
//                                         className="w-full"
//                                         style={{
//                                           borderBottom:
//                                             "1px solid rgb(233,233,233)",
//                                         }}
//                                       ></div>
//                                     </div>
//                                   </div>
//                                   <div className="flex justify-between relative flex-row-reverse mt-2">
//                                     <div className="self-center">
//                                       <button
//                                         className="cursor-pointer p-1 outline-none uppercase0"
//                                         style={{
//                                           border: "1px solid rgb(0, 171, 0)",
//                                           color: "rgb(0,171,0)",
//                                           backgroundColor: "rgb(255, 255, 255)",
//                                           borderRadius: "3px",
//                                         }}
//                                       >
//                                         <span className="text-xs font-semibold">
//                                           ADD TO CART
//                                         </span>
//                                       </button>
//                                     </div>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     )
//                   })}
//                 </div>
//               </>
//             )
//           })}
//         </div>{" "}
//       </div>
//     </>
//   )
// }

// export default Menu2
