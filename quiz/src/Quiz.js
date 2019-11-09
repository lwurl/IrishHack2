import React from 'react';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { db } from './firebase';
import './quiz.css'

const getItems = (count, offset = 0) =>
    Array.from({ length: count }, (v, k) => k).map(k => ({
        id: `item-${k + offset}`,
        content: `item ${k + offset}`
    }));

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "grey",

  // styles we need to apply on draggables
  ...draggableStyle
});

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: grid,
  width: 250
});

class Quiz extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items: [],
      selected: [],
      questionCategoryList: []
    };
    console.log(this.state.items);
    // this.loadQuotes();
  }

  async componentDidMount() {
    await this.getQuizTopics();
    await this.loadQuotes();
  }

  getQuizTopics = async () => {
    await db.collection("users").get().then((querySnapshot) => {
      // only one user for now
      let questionCategoryList = [];
      querySnapshot.forEach((doc) => {
        const userData = doc.data();
        const categoriesData = userData['categories'];
        // console.log(doc.id);
        // console.log(doc.data());
        // console.log(categoriesData);
        let totalPoints = 0;
        for (var cat in categoriesData){
          totalPoints += categoriesData[cat];
        }
        let questionsPerCat = [];
        for (var cat in categoriesData){
          questionsPerCat.push([cat, Math.min(Math.floor(10*categoriesData[cat] / totalPoints), 3)]);
        }

        for (let i = 0; i < questionsPerCat.length; i++){
          if (questionsPerCat[i][1] > 0){
            for (let j = 0; j < questionsPerCat[i][1]; j++){
              questionCategoryList.push(questionsPerCat[i][0]);
            }
          }
        }
        // console.log(questionsPerCat);
        // console.log(questionCategoryList);
      })
      this.setState({ questionCategoryList });
    });
  }

  loadQuotes = async () => {
    let items = [];
    await db.collection("quotes").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // db.collection("quotes").doc(doc.id).get().then((innerSnap) => {
        //   innerSnap.forEach(d => {
        //     console.log(d.data());
        //   })
        // });
        if (doc.id === this.state.questionCategoryList.pop()) {
          const qs = doc.data();
          // console.log(qs);
            for (var q in qs){
              if (q === 'question1'){
                // console.log(qs[q]);
                for (var candidate in qs[q]) {
                  // console.log(candidate);
                  items.push({id: candidate, content: qs[q][candidate]});
                }
              }
            }
          // doc.data().forEach((q) => {
            // console.log(q);
          // })
        }

        // console.log(items);
        // console.log(this.state.items);
        // console.log(doc.id);
        // console.log(doc.data());
      });
    });
    console.log(items);
    this.setState({ items });
    console.log(this.state.items);
  }

  id2List = {
    droppable: 'items',
    droppable2: 'selected'
  };

  getList = id => this.state[this.id2List[id]];

  onDragEnd = async (result) => {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
        return;
    }

    if (source.droppableId === destination.droppableId) {
        const items = reorder(
            this.getList(source.droppableId),
            source.index,
            destination.index
        );

        let state = { items };

        if (source.droppableId === 'droppable2') {
            state = { selected: items };
        }

        this.setState(state);
    } else {
        const result = move(
            this.getList(source.droppableId),
            this.getList(destination.droppableId),
            source,
            destination
        );

        this.setState({
            items: result.droppable,
            selected: result.droppable2
        });
    }
  };

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className="top">
          <h1>
            ISSUE
          </h1>
        </div>
        <div>
          <div className="left_col">
            <h2>
              Rank the quotes based on how much you agree with each one
            </h2>
            <p>
              Agree with MOST
            </p>
            <Droppable droppableId="droppable2">
              {(provided, snapshot) => (
                  <div
                      ref={provided.innerRef}
                      style={getListStyle(snapshot.isDraggingOver)}>
                      {this.state.selected.map((item, index) => (
                          <Draggable
                              key={item.id}
                              draggableId={item.id}
                              index={index}>
                              {(provided, snapshot) => (
                                  <div
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      style={getItemStyle(
                                          snapshot.isDragging,
                                          provided.draggableProps.style
                                      )}>
                                      {item.content}
                                  </div>
                              )}
                          </Draggable>
                      ))}
                      {provided.placeholder}
                  </div>
              )}
            </Droppable>
            <p>
              Agree with LEAST
            </p>
          </div>
          <div className="right_col">
            <Droppable droppableId="droppable">
                {(provided, snapshot) => (
                    <div
                        ref={provided.innerRef}
                        style={getListStyle(snapshot.isDraggingOver)}>
                        {this.state.items.map((item, index) => (
                            <Draggable
                                key={item.id}
                                draggableId={item.id}
                                index={index}>
                                {(provided, snapshot) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        style={getItemStyle(
                                            snapshot.isDragging,
                                            provided.draggableProps.style
                                        )}>
                                        {item.content}
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
          </div>
        </div>
      </DragDropContext>
    )
  }
}

export default Quiz;