# SGS

## First ms SQL

### a)
```
CREATE TABLE Containers (
    ID INT PRIMARY KEY IDENTITY,
    Number INT,
    Type NVARCHAR(100),
    Length DECIMAL(10, 2),
    Width DECIMAL(10, 2),
    Height DECIMAL(10, 2),
    Weight DECIMAL(10, 2),
    IsEmpty BIT,
    ArrivalDate DATETIME
);

CREATE TABLE Operations (
    ID INT PRIMARY KEY IDENTITY,
    ContainerID INT,
    StartDate DATETIME,
    EndDate DATETIME,
    OperationType NVARCHAR(100),
    OperatorName NVARCHAR(100),
    InspectionPlace NVARCHAR(100),
    FOREIGN KEY (ContainerID) REFERENCES Containers(ID)
);
```
### b)
```
DECLARE @json NVARCHAR(MAX) = '[';

SELECT @json = @json + CONCAT('{',
    '"ID":', ID, ', ',
    '"Number":', Number, ', ',
    '"Type":"', Type, '", ',
    '"Length":', Length, ', ',
    '"Width":', Width, ', ',
    '"Height":', Height, ', ',
    '"Weight":', Weight, ', ',
    '"IsEmpty":', CAST(IsEmpty AS NVARCHAR(5)), ', ',
    '"ArrivalDate":"', CONVERT(NVARCHAR, ArrivalDate, 126), '"',
    '},')
FROM Containers;

SET @json = LEFT(@json, LEN(@json) - 1) + ']';
SELECT @json AS ContainerDataInJSON;
```

### c)
```
DECLARE @ContainerID INT = 1;
DECLARE @json NVARCHAR(MAX) = '[';

SELECT @json = @json + CONCAT('{',
    '"ID":', ID, ', ',
    '"ContainerID":', ContainerID, ', ',
    '"StartDate":"', CONVERT(NVARCHAR, StartDate, 126), '", ',
    '"EndDate":"', CONVERT(NVARCHAR, EndDate, 126), '", ',
    '"OperationType":"', OperationType, '", ',
    '"OperatorName":"', OperatorName, '", ',
    '"InspectionPlace":"', InspectionPlace, '"',
    '},')
FROM Operations
WHERE ContainerID = @ContainerID;

SET @json = LEFT(@json, LEN(@json) - 1) + ']';
SELECT @json AS OperationsDataInJSON;
```

## Second
Второе задание можно найти в папке second (форма с использованием Html + JavaScript)

## Third
Третье задание можно найти в папке third (форма с использованием vue.js)