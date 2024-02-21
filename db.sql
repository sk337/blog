CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO posts (title, content)
VALUES ('First Post', '# Welcome to my blog!'),
     ('Second Post', '## A new beginning'),
     ('Third Post', '### Exploring new ideas');
