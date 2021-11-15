import { useContext, useEffect, useState} from "react";
import { AppContext } from "../utils/provider";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export default function Objects() {

  let arrCss = [];

  const [state, setState] = useContext(AppContext);
  const [task, setTasks] = useState(arrCss);

  const updateCss = () => {
    setTasks(addObject());
  };

  function cssDoc() {
    localStorage.setItem("css", JSON.stringify(arrCss));
    arrCss = JSON.parse(localStorage.getItem("css"));
  }

  function addObject() {
    let css = JSON.parse(localStorage.getItem("css"));
    let obj = {
      nombre: "layer" + (Object.keys(css).length + 1),
      propiedad: Object.keys(css).length + 1,
    };
    arrCss.push(obj);
    cssDoc();
    console.log(arrCss);
    let arrCssUpadate = arrCss;
    return arrCssUpadate;
  }

  useEffect(() => {
    arrCss = JSON.parse(localStorage.getItem("css"));
    if (arrCss === null) {
      arrCss = [];
      localStorage.setItem("css", JSON.stringify(arrCss));
    }
  });

  const reorder = (list, startIndex, endIndex) => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    localStorage.setItem("css", JSON.stringify(result));
    console.log(result);
    return result;
  };

  function cssDataShow(nombre) {
    arrCss = JSON.parse(localStorage.getItem("css"));
    let cssData = arrCss.find((item) => item.nombre == nombre);
    console.log(cssData.nombre);
    setState({ ...state, cssData: cssData});
    console.log(state.cssData);
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

          setTasks((prevTasks) =>
            reorder(prevTasks, source.index, destination.index)
          );
        }}
      >
        <Droppable droppableId="tasks">
          {(droppableProvider) => (
            <ul
              {...droppableProvider.droppableProps}
              ref={droppableProvider.innerRef}
              className="task-container"
            >
              {task.map((task, index) => (
                <Draggable
                  key={task.nombre}
                  draggableId={task.nombre}
                  index={index}
                >
                  {(draggableprovider) => (
                    <li
                      onClick={() => cssDataShow(task.nombre)}
                      {...draggableprovider.draggableProps}
                      ref={draggableprovider.innerRef}
                      {...draggableprovider.dragHandleProps}
                      className="task-item"
                    >
                      {task.nombre}
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
