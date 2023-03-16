CREATE TABLE Tutor (
  id INT PRIMARY KEY,
  full_name VARCHAR(255),
  age INT,
  origin VARCHAR(255),
  interests VARCHAR(255),
  email VARCHAR(255)
);

INSERT INTO Tutor (id, full_name, age, origin, interests, email)
VALUES
  (1, 'Michelle Louise', 30, 'United Kingdom', 'Programming, Hiking', 'michellelouise.hotmail.co.uk'),
  (2, 'Adam Johnson', 25, 'Italian', 'Reading, Painting', 'adamjohnson@hotmail.com'),
  (3, 'Sara Ahmed', 28, 'Moroccan', 'Cooking, Traveling', 'saraahmed@hotmail.com');
