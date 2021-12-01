import { useContext, useEffect} from "react";
import { AppContext } from "../utils/provider";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { CssContext } from "../utils/cssContext";

export default function Objects() {

  let {css} = useContext(CssContext);
  let {setCss} = useContext(CssContext);

  let arrCss = [];

  const [state, setState] = useContext(AppContext);

  const updateCss = () => {
    setCss(addObject());
  };

  function cssDoc() {
    localStorage.setItem("css", JSON.stringify(css));
    arrCss = JSON.parse(localStorage.getItem("css"));
  }

  function addObject() {
    let cssStore = JSON.parse(localStorage.getItem("css"));
    let obj = {
      id: Object.keys(cssStore).length + 1,
      nombre: "layer" + (Object.keys(cssStore).length + 1),
      propiedad: Object.keys(cssStore).length + 1,
      classOrId:"class",
      ancho:50,
      alto:50,
      texto:"",
      fontSize:20,
      colorMode:"solid",
      color:[{cId:1, c:"#ffffff", t:"255"}],
      linearGradientDirection:180,
      position:"static",
      locationX:50,
      locationY:50,
      margenSuperior:0,
      margenDerecho:0,
      margenInferior:0,
      margenIzquierdo:0,
      boxShadowX:0,
      boxShadowY:0,
      boxShadowBlur:0,
      boxShadowZ:0,
      boxShadowColor:"#000000",
      boxShadowColorOpacity:"255",
      boxShadowTipe:"",


    };
    css.push(obj);
    cssDoc();
    let arrCssUpadate = css;
    return arrCssUpadate;
  }


  useEffect(() => {
    css = JSON.parse(localStorage.getItem("css"));
    if (css === null) {
      css = [];
      localStorage.setItem("css", JSON.stringify(css));
    }
  });

  const reorder = (list, startIndex, endIndex) => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    localStorage.setItem("css", JSON.stringify(result));
    setCss(result);
    return result;
  };

  function cssDataShow(id) {
    arrCss = JSON.parse(localStorage.getItem("css"));
    let cssDataSelect = arrCss.find((arrCss) => id === arrCss.id);
    setState({ ...state, cssData: cssDataSelect});
  }

  return (
    <div>
      <button onClick={addObject} onClick={updateCss}>
        Añadir Nuevo Objeto
      </button>
      <DragDropContext
        onDragEnd={(result) => {
          const { source, destination } = result;
          if (!destination) {
            return;
          }
          if (
            source.index === destination.index &&
            source.droppableId === destination.droppableId
          ) {
            return;
          }

          setCss((prevCsss) =>
            reorder(prevCsss, source.index, destination.index)
          );
        }}
      >
        <Droppable droppableId="css">
          {(droppableProvider) => (
            <ul
              {...droppableProvider.droppableProps}
              ref={droppableProvider.innerRef}
              className="css-container"
            >
              {css.map((css, index) => (
                <Draggable
                  key={css.nombre}
                  draggableId={css.nombre}
                  index={index}
                >
                  {(draggableprovider) => (
                    <li
                      onClick={() => cssDataShow(css.id)}
                      {...draggableprovider.draggableProps}
                      ref={draggableprovider.innerRef}
                      {...draggableprovider.dragHandleProps}
                      className="css-item"
                    > 
                      {css.nombre}
                    </li>
                  )}
                </Draggable>
              ))}
              {droppableProvider.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
