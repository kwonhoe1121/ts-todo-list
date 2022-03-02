/**
 * @module Todo Module
 */

/**
 * Todo type definition
 * @typedef {Object} Todo 
 * @property {string} id - 아이디(required)
 * @property {string} content - 내용(required)
 * @property {boolean} isClear - 완료여부(required)
 * @property {string} category - 카테고리(required)
 * @property {string[]} tags - 태그들(optional)
 */

/**
 * @property {Todo[]} todoList - Todo 객체 배열
 */
const todoList = []


// CREATE
/**
 * @function createTodo
 * @param {Object} properties
 * @description 속성 검사 후 Todo 타입 객체 반환
 * @returns {Todo}
 */
function createTodo( properties ) {}

/**
 * @function addTodo
 * @param {Todo} todo
 * @description 할 일을 추가할 수 있다.
 */
function addTodo( todo ) {}

/**
 * @function hasContent
 * @param {Todo} todo
 * @returns {boolean} - content 존재 여부
 * @description todo 객체에 content 내용 있는지 확인하는 함수
 */
function hasContent( todo ) {}

/**
 * @function addTodoAfterValidation
 * @param {Todo} todo
 * @param {Object} validationFn - Todo 속성 validationFn 함수
 * @returns {boolean} - Todo 추가 성공 여부
 * @description 내용없이 추가할 수 없다.
 */
function addTodoAfterValidation( todo, validationFn ) {}


// READ
/**
 * @function getTodoList
 * @returns {Todo[]}
 * @description 모든 할 일을 조회할 수 있다.
 */
function getTodoList() {}

/**
 * @function getTodo
 * @param {string} todoId
 * @returns {Todo}
 * @description ID를 기반으로 특정 할 일을 조회할 수 있다.
 */
function getTodo( todoId ) {}


// UPDATE
/**
 * @function updateTodo
 * @param {string} todoId
 * @param {Object} updateProperty
 * @returns {boolean} - Todo 갱신 성공 여부
 * @description ID를 제외한 모든 속성을 수정할 수 있다.
 */
function updateTodo( todoId, updateProperty ) {}

/**
 * @function updateTag
 * @param {string} todoId
 * @param {string} targetTag
 * @param {string} updateTag
 * @returns {boolean} - tag 갱신 성공 여부
 * @description 특정 할 일의 특정 태그를 수정할 수 있다.
 */
function updateTag( todoId, targetTag, updateTag ) {}


/**
 * @function deleteTodo
 * @param {string} todoId
 * @returns {boolean} - Todo 삭제 성공 여부
 * @description ID를 기반으로 특정 할 일을 삭제할 수 있다.
 */
function deleteTodo( todoId ) {}

/**
 * @function deleteTodoAll
 * @description 모든 할 일을 제거할 수 있다.
 */
function deleteTodoAll() {}

/**
 * @function deleteTag
 * @param {string} todoId
 * @param {string} targetTag
 * @returns {boolean} - tag 삭제 성공 여부
 * @description 특정 할 일의 특정 태그를 삭제할 수 있다.
 */
function deleteTag( todoId, targetTag ) {}

/**
 * @function deleteTags
 * @param {string} todoId
 * @returns {boolean} - tags 삭제 성공 여부
 * @description 특정 할 일의 모든 태그를 제거할 수 있다.
 */
function deleteTags( todoId ) {}

