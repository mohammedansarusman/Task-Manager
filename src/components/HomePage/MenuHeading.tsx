
type MenuHeadingProp = {
    heading: string;
}
const MenuHeading = ({heading}: MenuHeadingProp) => {
  return (
    <main className='w-[100%] flex justify-center items-center border-b-2 border-b-gray-200 py-1.5'>
        <h1>{heading}</h1>
    </main>
  )
}

export default MenuHeading;