// Функция для создания родительского узла, возвращает дочерние узлы
const createParent = (value, children) => ({
  value,       // Значение узла
  children,    // Массив дочерних узлов
  // Метод вычисления глубины поддерева
  depth() {
    // 1 (текущий узел) + максимальная глубина дочерних поддеревьев
    return 1 + Math.max(...this.children.map(n => n.depth()))
  }
})

// Функуия создания листового узла
const createLeaf = (value) => ({
  value,
  // Глубина листа всегда = 1
  depth() { return 1 }
})

// Создание древовидной структуры:
const tree = createParent('root', [  // Корневой узел
  createParent('child1', [           // Узел уровня 2
    createLeaf('leaf1'),             // Листья уровня 3
    createLeaf('leaf2')
  ]),
  createLeaf('child2'),              // Лист уровня 2
  createParent('child3', [           // Узел уровня 2
    createParent('child3.1', [       // Узел уровня 3
      createLeaf('leaf3')            // Лист уровня 4
    ])
  ])
])

// Вычисление глубины всего дерева
console.log(tree.depth())
