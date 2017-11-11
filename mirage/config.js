export default function() {
  this.namespace = 'api';

  this.get('/projects', (schema) => {
    return schema.projects.all();
  })
}
