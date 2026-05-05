// Liste initiale des tâches du jour, chaque tâche a un titre et un statut (done)
const tasksOfTheDay = [
    { title: 'Faire les courses', done: false },
    { title: 'Nettoyer la maison', done: true },
    { title: 'Planter le jardin', done: false }
];

// Copie du tableau original avec l'opérateur spread pour ne pas modifier tasksOfTheDay
let tasklist = [...tasksOfTheDay];

// Ajoute une nouvelle tâche à la liste avec le statut done = false par défaut
let addTask = (tasklist, newTask) => {
    tasklist.push({ title: newTask, done: false });
    return tasklist;
};

// Supprime une tâche de la liste en filtrant par titre
let removeTask = (tasklist, title) => {
    tasklist = tasklist.filter(task => task.title !== title);
    return tasklist;
}

// Change le statut done d'une tâche identifiée par son titre
// Utilise map pour créer un nouveau tableau et spread pour ne pas muter l'objet d'origine
let toggleTaskStatus = (tasklist, title, done) => {
    tasklist = tasklist.map(task => ({ ...task, done: task.title === title ? done : task.done }));
    return tasklist;
}

// Retourne toutes les tâches si status est undefined,
// sinon filtre les tâches selon leur statut (true = terminées, false = non terminées)
let showTasks = (tasklist, status) => {
    return status === undefined ? tasklist : tasklist.filter(task => task.done === status);
}

// Ajout d'une tâche (modifie directement le tableau par référence avec push)
addTask(tasklist, 'Faire du sport');
console.log(tasklist);

// Suppression de la tâche ajoutée  tasklist est réassigné car filter retourne un nouveau tableau
tasklist = removeTask(tasklist, 'Faire du sport');
console.log(tasklist);

// Marque la tâche 'Planter le jardin' comme terminée (done = true)
tasklist = toggleTaskStatus(tasklist, 'Planter le jardin', true);
console.log(tasklist);

console.log(showTasks(tasklist, true));  // status = true  retourne les tâches terminées
console.log(showTasks(tasklist, false)); // status = false retourne les tâches non terminées
console.log(showTasks(tasklist));        // status = undefined retourne toutes les tâches