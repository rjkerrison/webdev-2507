const root = document.querySelector('#root')

const githubUrl = (githubRef) => `https://github.com/${githubRef}/`

const getProjectUrl = (student) => {
  const githubProject = `${student.github.username}/${student.projects[0]}`
  const url = githubUrl(githubProject)
  return url
}

fetch('../students.json')
  .then((res) => res.json())
  .then((info) => {
    const getActiveStudents = () => {
      return info.filter((x) => x.status !== 'deferred')
    }

    const ul = document.createElement('ul')
    ul.classList.add('students')

    getActiveStudents().forEach((student) => {
      console.log(student)
      const li = document.createElement('li')
      li.innerHTML = `<div>
      <h2>${student.name}</h2>
      <a href="${getProjectUrl(student)}">
        ${student.projects[0]}
      </a>
      </div>`
      ul.appendChild(li)
    })

    root.append(ul)
  })
