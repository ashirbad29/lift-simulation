import { getFormValue, renderWelcomeScreen } from './welcomeScreen'

import './style.css'

const state = {
  floors: 0,
  lifts: 0,
}

const app = document.querySelector('#app')
// renderWelcomeScreen(app);

// const welcomeForm = document.querySelector('#welcome-form')
// welcomeForm.addEventListener('submit', (event) => {
//   event.preventDefault();
//   const { floors, lifts } = getFormValue();

//   startSimulation(floors, lifts);
// })

const startSimulation = (floors, lifts) => {
  app.innerHTML = `
    <section class="simulation-section" ></section>
  `

  renderFloors(floors);
  renderLifts(lifts);
}

const renderLifts = (lifts) => {
  const simulationSection = document.querySelector('.simulation-section')

  const createLift = (liftIndex) => {
    const lift = document.createElement('div');
    lift.classList.add('lift', `lift-${liftIndex}`);
    lift.innerHTML = `
      <div></div>
      <div></div>
    `
    return lift;
  }

  const simulationFragment = document.createDocumentFragment();

  for(let i = floors; i > 0; i--) {
    const lift = createLift(i);
    simulationFragment.appendChild(lift);
  } 

  simulationSection.appendChild(simulationFragment);
}

const renderFloors = (floors) => {
  const simulationSection = document.querySelector('.simulation-section')

  const createFloor = (floorNumber) => {
    const floor = document.createElement('div');
    floor.classList.add('floor', `floor-${floorNumber}`);

    const actionButtonsSection = document.createElement('div');
    actionButtonsSection.classList.add('action-buttons-section');

    const upButton = document.createElement('button');
    upButton.innerHTML = `👆`

    const downButton = document.createElement('button');
    downButton.innerHTML = `👇`

    actionButtonsSection.append(upButton, downButton); 

    const floorNumberSection = document.createElement('div');
    floorNumberSection.innerHTML = `
      <span class="floor-number">Floor: ${floorNumber}</span>
    `

    floor.appendChild(actionButtonsSection);
    floor.appendChild(floorNumberSection);

    return floor;
  }

  const simulationFragment = document.createDocumentFragment();
  for (let i = floors; i >= 1; i--) {
    simulationFragment.appendChild(createFloor(i));
  }

  simulationSection.appendChild(simulationFragment);
}


startSimulation(4, 2);