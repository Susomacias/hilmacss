import { useContext, useEffect} from "react";
import { AppContext } from "../utils/provider";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { CssContext } from "../utils/cssContext";
import "./objects.css";

export default function Objects() {

  let {css} = useContext(CssContext);
  let {setCss} = useContext(CssContext);

  let space = <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>;

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
      nombre: "objeto" + (Object.keys(cssStore).length + 1),
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
      borderTopStyle:0,
      borderRightStyle:0,
      borderBottomStyle:0,
      borderLeftStyle:0,
      borderColor:"#000000",
      borderColorOpacity:"255",
      zIndex:0,
      borderRadiusSI:0,
      borderRadiusSD:0,
      borderRadiusII:0,
      borderRadiusID:0,
      transformRotateZ:0,
      transformRotateX:0,
      transformRotateY:0,
      transformSkewX:0,
      transformSkewY:0,
      fontWeight:300,
      fontStyle:"normal",
      paddingTop:0,
      paddingRight:0,
      paddingBottom:0,
      paddingLeft:0,
      textAling:"center",
      wordWrap:"break-word",
      textColor:"#000000",
      textOpacity:"255",
      webKitTextStroke:0,
      webKitTextStrokeColor:"#000000",
      webKitTextStrokeOpacity:"255",
      textShadowX:0,
      textShadowY:0,
      textShadowBlur:0,
      textShadowColor:"#000000",
      textShadowColorOpacity:"255",
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

  function removeColor(e) {
    let id = e.target.id;
    let arr = JSON.parse(localStorage.getItem("css"));
    let newArr = arr.filter((c) => c.id != id);
    localStorage.setItem("css", JSON.stringify(newArr));
    setCss(newArr);
  }

  return (
    <div>
      <div onClick={addObject} onClick={updateCss} className="buttonAddObject">
        Añadir Nuevo Objeto
      </div>
      <span className="selectToList">Selecciona un objeto de la lista</span>
      <div className="objectContainer" style = {{width: '100%', height: '58vh', overflow: "auto"}}>
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
                    {css.position === "absolute" ? (
                      <div className="layerNameButtonChildren">
                      {css.nombre} 
                      <div className="closeButton" id={css.id} onClick={removeColor}>X</div>
                    </div>
                    ):(
                      <div className="layerNameButton">
                        {css.nombre} 
                        <div className="closeButton" id={css.id} onClick={removeColor}>X</div>
                      </div>
                    )}
                      
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
    </div>
  );
}
