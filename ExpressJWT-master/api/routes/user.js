const {Router} = require ('express')
const router = Router();
const pool = require ('../connection/connection');

const jwt = require('jsonwebtoken');

router.get('/', (req, res)=>{

   pool.query('select * from persona',(err,rows)=>{
        if(!err)
        {
        res.json(rows.rows);
        console.log(rows.rows);
        } 
        else
        {
        console.log(err)
        }
    });
});

router.get('/roles', (req, res)=>{

    pool.query('select * from roles',(err,rows)=>{
         if(!err)
         {
         res.json(rows.rows);
         console.log(rows.rows);
         } 
         else
         {
         console.log(err)
         }
     });
 });

 router.get('/laboratorio', (req, res)=>{

    pool.query('select * from laboratorio',(err,rows)=>{
         if(!err)
         {
         res.json(rows.rows);
         console.log(rows.rows);
         } 
         else
         {
         console.log(err)
         }
     });
 });

 router.get('/examen', (req, res)=>{

    pool.query('select * from examen',(err,rows)=>{
         if(!err)
         {
         res.json(rows.rows);
         console.log(rows.rows);
         } 
         else
         {
         console.log(err)
         }
     });
 });


router.get('/:idpersona', (req, res)=>{
    const {idpersona} = req.params;
    pool.query(`select * from persona WHERE idpersona = '${idpersona}'`,(err,rows)=>{
         if(!err)
         {
         res.json(rows.rows);
         console.log(rows.rows);
         } 
         else
         {
         console.log(err)
         }
     });
 });

 router.get('/laboratorista/:idrol', (req, res)=>{
    const {idrol} = req.params;
    pool.query(`select * from persona WHERE idrol = '${idrol}'`,(err,rows)=>{
         if(!err)
         {
         res.json(rows.rows);
         console.log(rows.rows);
         } 
         else
         {
         console.log(err)
         }
     });
 });


 router.get('/cliente/:idrol', (req, res)=>{
    const {idrol} = req.params;
    pool.query(`select * from persona WHERE idrol = '${idrol}'`,(err,rows)=>{
         if(!err)
         {
         res.json(rows.rows);
         console.log(rows.rows);
         } 
         else
         {
         console.log(err)
         }
     });
 });




router.post('/registro', (req, res)=>{
    const {idrol, idlaboratorio, numcedula, nombre, apellido,fechanac, sexo, usuario, contrasena} = req.body;
    console.log(req.body)

    const text = 'insert INTO persona(idrol, idlaboratorio, numcedula, nombre, apellido,fechanac, sexo, usuario, contrasena) values ($1,$2,$3,$4,$5,$6,$7,$8,$9);'
    const values = [idrol, idlaboratorio, numcedula, nombre, apellido,fechanac, sexo, usuario, contrasena] 

    pool.query(text, values,(err,rows)=>{
        if(!err)
        {
        res.json({Status: 'Realizado mics'});
        } 
        else
        {
        console.log(err)
        }
    });

});

router.post('/registrolab', (req, res)=>{
    const {nombre, pais, ciudad, direccion, ruc,correo, propietario} = req.body;
    console.log(req.body)

    const text = 'insert INTO laboratorio(nombre, pais, ciudad, direccion, ruc,correo, propietario) values ($1,$2,$3,$4,$5,$6,$7);'
    const values = [nombre, pais, ciudad, direccion, ruc,correo, propietario] 

    pool.query(text, values,(err,rows)=>{
        if(!err)
        {
        res.json({Status: 'Realizado mics'});
        } 
        else
        {
        console.log(err)
        }
    });

});



router.post('/login', (req, res)=>{
    const {usuario, contrasena} = req.body;
    pool.query(`select usuario, idrol from persona where usuario='${usuario}' and contrasena ='${contrasena}'`,(err,rows)=>{
        if(!err)
        {
            if(rows.rows.length>0)
            {
            let data= JSON.stringify(rows.rows[0]);
            const token= jwt.sign(data, 'jean');
            res.json({token});
             }
             else{
                res.json('Usuario o clave incorrectos');
             }
        } 
        else
        {
        console.log(err)
        }
    });

});

router.post('/test', verifyToken, (req, res)=>{
    res.json('información secreta')
});

function verifyToken(req,res,next)
{
    if(!req.headers.authorization)
    return res.Status(401).json('No autorizado');

    const token=req.headers.authorization.substr(7);
    if(token!='')
    {
       const content = jwt.verify(token,'jean');
       req.data = content;
       next();
    }
    else
    {
        res.Status(401).json('Token vacio');
    }
}



router.put('/:idpersona', (req, res)=>{
    const {idrol, idlaboratorio, numcedula, nombre, apellido,fechanac, sexo, usuario, contrasena} = req.body;
    const {idpersona} = req.params;

    const text = `UPDATE persona SET (idrol, idlaboratorio, numcedula, nombre, apellido,fechanac, sexo, usuario, contrasena) = ($1,$2,$3,$4,$5,$6,$7,$8,$9) WHERE idpersona = '${idpersona}'`
    const values = [idrol, idlaboratorio, numcedula, nombre, apellido,fechanac, sexo, usuario, contrasena]
    pool.query(text, values,(err,rows)=>{
        if(!err)
        {
        res.json({Status: 'Realizado mics'});
        } 
        else
        {
        console.log(err)
        }
    });

});


router.delete('/:idpersona', (req, res)=>{
    const {idpersona} = req.params;
    pool.query(`delete from persona WHERE idpersona = '${idpersona}'`,(err,rows)=>{
         if(!err)
         {
        res.json({Status: 'Realizado mics'});
         } 
         else
         {
         console.log(err)
         }
     });
 });
 module.exports= router;