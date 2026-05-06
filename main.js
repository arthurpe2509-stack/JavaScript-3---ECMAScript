// Liste initiale des tâches du jour, chaque tâche a un titre et un statut (done)
const tasksOfTheDay = [
    { title: 'Faire les courses', done: false },
    { title: 'Nettoyer la maison', done: true },
    { title: 'Planter le jardin', done: false }
];

// Copie du tableau original avec l'opérateur spread pour ne pas modifier tasksOfTheDay
let tasklist = [...tasksOfTheDay];
const newTask = { title: 'Faire du sport', done: false };

// Ajoute une nouvelle tâche à la liste avec le statut done = false par défaut
const addTask = (tasklist, newTask) => [...tasklist, newTask]; // Utilise spread pour créer un nouveau tableau avec la nouvelle tâche

// Supprime une tâche de la liste en filtrant par titre
const removeTask = (tasklist, title) => {
    tasklist = tasklist.filter(task => task.title !== title);
    return tasklist;
}

// Change le statut done d'une tâche identifiée par son titre
// Utilise map pour créer un nouveau tableau et spread pour ne pas muter l'objet d'origine
const toggleTaskStatus = function (task) {
    task.done = task.done ? false : true;
    return task;
}

// Retourne toutes les tâches si status est undefined,
// sinon filtre les tâches selon leur statut (true = terminées, false = non terminées)
const showTasks = (tasklist, status) => {
    return status === undefined ? tasklist : tasklist.filter(task => task.done === status);
}

// Ajout d'une tâche (modifie directement le tableau par référence avec push)
tasklist = addTask(tasklist, newTask);
console.log(tasklist);

// Suppression de la tâche tasklist est réassigné car filter retourne un nouveau tableau
tasklist = removeTask(tasklist, 'Planter le jardin');
console.log(tasklist);

// Marque la tâche 'Planter le jardin' comme terminée (done = true)
toggleTaskStatus(tasklist[2]);
console.log(tasklist[2]);

console.log(showTasks(tasklist, true));  // status = true  retourne les tâches terminées
console.log(showTasks(tasklist, false)); // status = false retourne les tâches non terminées
console.log(showTasks(tasklist));        // status = undefined retourne toutes les tâches